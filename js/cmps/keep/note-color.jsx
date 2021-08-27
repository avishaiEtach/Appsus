export function ColorInput({ onChangeStyle, isActive }) {
    const colors = ['#FFAEBC', '#A0E7E5', '#B4F8C8', '#FBE7C6']
    return (
        <section className='dynamic-input color '>
            <section className={`input-container ${isActive ? "active" : ""}`} >
                {
                    colors.map(color => (
                        <article key={color} onClick={() => onChangeStyle('backgroundColor', color)} style={{ backgroundColor: color }} className="input-pick"></article>
                    ))
                }

            </section>
        </ section>
    )
}