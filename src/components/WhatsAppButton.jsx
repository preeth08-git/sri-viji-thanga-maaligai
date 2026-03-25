export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ 
        position: "fixed", bottom: "24px", right: "24px", 
        backgroundColor: "#25D366", color: "white", 
        width: "55px", height: "55px", borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)", zIndex: 1000,
        textDecoration: "none", fontSize: "1.2rem"
      }}
    >
      <span role="img" aria-label="whatsapp">💬</span>
    </a>
  );
}
