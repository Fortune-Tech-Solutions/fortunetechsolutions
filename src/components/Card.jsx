
const Card = ({ title, body, actions, badge = false, className, value }) => {
    return (
        <div className={`card border border-base-content w-full rounded ${className}`}>
            <div className="card-body">
                <div className="flex items-center space-x-4">
                    <h2 className="card-title text-2xl text-base-content/80">{title}</h2>
                    {
                        badge ?
                            <div className="badge badge-secondary text-primary rounded-sm">POPULAR</div>
                            : null
                    }
                </div>
                <div className="stat">
                    <div className="stat-value">
                        {value}
                    </div>
                </div>
                <div>{body}</div>
                <div className="card-actions">
                    {actions}
                </div>
            </div>
        </div>
    );
}

export default Card;
