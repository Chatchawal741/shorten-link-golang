package main

import (
	"fmt"
	"log"
	"os"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type ShortenLink struct {
	gorm.Model
	OriginalURL string `gorm:"unique"`
	ShortURL    string `gorm:"unique"`
}

func GormInit() *gorm.DB {

	var host = os.Getenv("DB_HOST")
	var dbname = os.Getenv("DB_DB")
	var user = os.Getenv("DB_USER")
	var password = os.Getenv("DB_PASSWORD")
	var port = os.Getenv("DB_PORT")

	dsn := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	newLogger := logger.New(
		log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
		logger.Config{
			SlowThreshold: time.Second, // Slow SQL threshold
			LogLevel:      logger.Info, // Log level
			Colorful:      true,        // Disable color
		},
	)

	// initialize gorm postgreSQL
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: newLogger,
	})
	if err != nil {
		log.Fatal("Error with Connecting Databases: ", err)
	}

	db.AutoMigrate(&ShortenLink{})

	return db
}
