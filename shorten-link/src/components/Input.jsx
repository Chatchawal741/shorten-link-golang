import { useEffect, useRef, useState } from "react";
import axios from "axios";
function Input() {
  const [url, setURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const inputLinkRef = useRef(null);

  const BASE_URL = "http://localhost:3000";

  async function shortLinkSubmit() {
    if (!url) {
      alert("wrong URL");
      return;
    }

    try {
      const res = await axios.post(`/shorten`, { url });
      const { short_url } = await res.data;

      setShortURL(short_url);
    } catch (error) {
      console.error(error);
    }
  }

  // open URL
  function handleOpenURL() {
    if (shortURL) {
      window.open(`${BASE_URL}/${shortURL}`, "_blank");
    }
  }

  // copy to clipboard
  function handleCopyURL() {
    if (shortURL) {
      navigator.clipboard.writeText(`${BASE_URL}/${shortURL}`);
    }
  }

  useEffect(() => {
    if (shortURL) {
      inputLinkRef.current.value = `${BASE_URL}/${shortURL}`;
      inputLinkRef.current.setAttribute("readonly", true);
    }
  });
  return (
    <>
      <input
        type="text"
        className="w-full bg-transparent outline-white outline-1 p-2 text-white placeholder:text-white"
        placeholder="short your link here"
        onChange={() => setURL(event.target.value)}
        ref={inputLinkRef}
      />

      {/* shorten button state */}
      {!shortURL ? (
        <button
          className="bg-green-600  active:bg-green-700 rounded-xl md:rounded-lg text-white p-2 md:px-2 font-medium"
          onClick={shortLinkSubmit}
        >
          shorten
        </button>
      ) : (
        <div className="flex flex-col md:flex-row gap-4">
          <button
            className="w-full md:w-max bg-green-600  active:bg-green-700 rounded-xl md:rounded-lg text-white p-2 md:px-2 font-medium"
            onClick={handleCopyURL}
          >
            Copy
          </button>
          <button
            className="w-full md:w-max bg-green-600 active:bg-green-700 rounded-xl md:rounded-lg text-white p-2 md:px-2 font-medium"
            onClick={handleOpenURL}
          >
            Open URL
          </button>
          <button
            className="w-full md:w-max bg-green-600 active:bg-green-700 rounded-xl md:rounded-lg text-white p-2 md:px-2 font-medium"
            onClick={() => {
              setShortURL("");
              window.location.href = "/";
            }}
          >
            Short another URL
          </button>
        </div>
      )}
    </>
  );
}

export default Input;
