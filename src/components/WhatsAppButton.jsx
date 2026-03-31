export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919840686575"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed", bottom: "24px", right: "24px", zIndex: 999,
        backgroundColor: "#25D366", color: "#fff", borderRadius: "50%",
        width: "56px", height: "56px", display: "flex", alignItems: "center",
        justifyContent: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        fontSize: "1.6rem", textDecoration: "none"
      }}
      title="Chat on WhatsApp"
    >
      💬
    </a>
  );
}