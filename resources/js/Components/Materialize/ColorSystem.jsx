export default function ColorSystem() {
    const colors = [
        'red', 'pink', 'purple', 'deep-purple', 'indigo', 
        'blue', 'light-blue', 'cyan', 'teal', 'green',
        'light-green', 'lime', 'yellow', 'amber', 'orange',
        'deep-orange', 'brown', 'grey', 'blue-grey'
    ];

    return (
        <div className="section" id="colors">
            <h2 className="header">Color System</h2>
            <p className="flow-text">Materialize comes with a color palette based on material design base colors.</p>
            
            <h4>Background Colors</h4>
            <div className="row">
                {colors.map(color => (
                    <div key={color} className="col s6 m4 l3">
                        <div className={`card-panel ${color} white-text center-align`}>
                            {color}
                        </div>
                    </div>
                ))}
            </div>
            
            <h4>Text Colors</h4>
            <div className="card-panel">
                {colors.map(color => (
                    <p key={`text-${color}`} className={`${color}-text`}>
                        This is {color} text
                    </p>
                ))}
            </div>
            
            <h4>Color Variations</h4>
            <div className="row">
                <div className="col s12 m4">
                    <h5>Lighten</h5>
                    <div className={`card-panel blue lighten-5`}>lighten-5</div>
                    <div className={`card-panel blue lighten-4`}>lighten-4</div>
                    <div className={`card-panel blue lighten-3`}>lighten-3</div>
                    <div className={`card-panel blue lighten-2`}>lighten-2</div>
                    <div className={`card-panel blue lighten-1`}>lighten-1</div>
                </div>
                
                <div className="col s12 m4">
                    <h5>Base Color</h5>
                    <div className={`card-panel blue`}>base color</div>
                </div>
                
                <div className="col s12 m4">
                    <h5>Darken</h5>
                    <div className={`card-panel blue darken-1`}>darken-1</div>
                    <div className={`card-panel blue darken-2`}>darken-2</div>
                    <div className={`card-panel blue darken-3`}>darken-3</div>
                    <div className={`card-panel blue darken-4`}>darken-4</div>
                </div>
            </div>
        </div>
    );
}