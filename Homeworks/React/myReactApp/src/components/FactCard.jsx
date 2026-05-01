function FactCard({ fact }) {
    if (!fact) return null;

    return (
        <div className="fact-box">
            <p>{fact}</p>
        </div>
    );
}

export default FactCard;