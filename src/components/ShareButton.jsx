function ShareOnTelegramButton({ url, text, image }) {
  // Encode the URL and text to ensure they are safe to include in a query string
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  // Construct the full URL for sharing on Telegram
  const telegramShareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}&image=${image}`;

  return (
    <a
      href={telegramShareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="share-button"
    >
      <i className="fa-brands fa-telegram"></i>
      Share on Telegram
    </a>
  );
}

export default ShareOnTelegramButton;
