export default function GamePage() {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src="/web-export/gametest.html"
        title="Godot Game"
        width="100%"
        height="100%"
        allowFullScreen
        style={{ border: 'none', width: '100vw', height: '100vh', display: 'block' }}
      />
    </div>
  );
}
