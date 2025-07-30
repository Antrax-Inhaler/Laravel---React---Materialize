export default function Typography() {
    return (
        <div className="section" id="typography">
            <h2 className="header">Typography</h2>
            
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        <h1>Heading h1</h1>
                        <h2>Heading h2</h2>
                        <h3>Heading h3</h3>
                        <h4>Heading h4</h4>
                        <h5>Heading h5</h5>
                        <h6>Heading h6</h6>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col s12 m6">
                    <div className="card-panel">
                        <h5>Flow Text</h5>
                        <p className="flow-text">
                            This is flow text. It elegantly scales the font-size based on the screen width. 
                            Try resizing your browser to see it in action!
                        </p>
                    </div>
                </div>
                
                <div className="col s12 m6">
                    <div className="card-panel">
                        <h5>Blockquotes</h5>
                        <blockquote className="blue-text">
                            This is an example quotation that uses the blockquote tag. 
                            Materialize provides styling for blockquotes that makes them stand out.
                        </blockquote>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col s12">
                    <div className="card-panel">
                        <h5>Text Alignment</h5>
                        <p className="left-align">Left aligned text</p>
                        <p className="center-align">Center aligned text</p>
                        <p className="right-align">Right aligned text</p>
                    </div>
                </div>
            </div>
        </div>
    );
}