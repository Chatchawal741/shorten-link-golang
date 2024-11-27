package main

import (
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/gorm"

	"github.com/gin-contrib/cors"
)

func main() {

	if err := godotenv.Load(); err != nil {
		log.Fatal("Error with loading environment files: ", err)
	}

	// run once
	db := GormInit()

	fmt.Println("databases connect successed")
	fmt.Println(db)

	router := gin.Default()

	// cors enable
	router.Use(cors.Default())

	// create new short_url pair with original link
	router.POST("/shorten", func(c *gin.Context) {

		// body parser binding json
		var data struct {
			URL string `json:"url" binding:"required"`
		}

		// checking request data
		if err := c.ShouldBindJSON(&data); err != nil {
			// return status code & error message in map
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		var link ShortenLink
		// query existing link
		result := db.Where("original_url = ?", data.URL).First(&link)
		if result.Error != nil {
			// query existing link
			// if not found then create a new ones
			if result.Error == gorm.ErrRecordNotFound {
				shortURL := generateShortURL()

				link = ShortenLink{ShortURL: shortURL, OriginalURL: data.URL}
				result = db.Create(&link)
				if result.Error != nil {
					c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
					return
				}
			}
		}

		c.JSON(http.StatusOK, gin.H{"short_url": link.ShortURL})
	})

	// localhost:3000/short_url --redirect to--> original_url
	router.GET("/:shortURL", func(c *gin.Context) {
		shortURL := c.Param("shortURL")
		var link ShortenLink

		// find original existing link with short_url query
		result := db.Where("short_url = ?", shortURL).Find(&link)
		if result.Error != nil {
			if result.Error == gorm.ErrRecordNotFound {
				// cheking existence of short_url
				c.JSON(http.StatusNotFound, gin.H{"error": "URL not found"})
			} else {
				c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
			}
			return
		}

		// redirect original link
		// response http code 301
		c.Redirect(http.StatusMovedPermanently, link.OriginalURL)
	})

	router.Run(":3000")

}

// # create short_url
// random text with 6 characters that pair with original_url
func generateShortURL() string {
	// chanracters instance
	const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

	rand.Seed(time.Now().UnixNano())

	var shortURL string
	for i := 0; i < 6; i++ {
		// random char 6 times with its length
		shortURL += string(char[rand.Intn(len(char))])
	}

	return shortURL
}
