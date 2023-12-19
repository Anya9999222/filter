import "./Toolbar.css"

export const Toolbar = ({ filters = [], tabCurrent, onSelect }) => {
    return(
        <div className="toolbar-buttons">
            {filters.map(tab => {
                return <button 
                className={tab ===  tabCurrent ? 'active' : ''}
                onClick={() => onSelect(tab)}>
                    {tab}
                </button>
            })}
        </div>
    );
}