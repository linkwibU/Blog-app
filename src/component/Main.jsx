export default function Main({ children }) {
    return (
        <main style={{ padding: "20px", minHeight: "200px",display:'flex', justifyContent:'center' }}>
            {children}
        </main>
    );
}
