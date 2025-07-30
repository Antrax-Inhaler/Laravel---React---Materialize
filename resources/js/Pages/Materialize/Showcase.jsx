import AppLayout from '@/Components/Layouts/AppLayout';
import GridSystem from '@/Components/Materialize/GridSystem';
import ColorSystem from '@/Components/Materialize/ColorSystem';
import Typography from '@/Components/Materialize/Typography';
import Components from '@/Components/Materialize/Components';
import Animations from '@/Components/Materialize/Animations';

export default function Showcase() {
    return (
        <AppLayout title="Materialize Showcase">
            <div className="section scrollspy" id="grid">
                <GridSystem />
            </div>
            
            <div className="section scrollspy" id="colors">
                <ColorSystem />
            </div>
            
            <div className="section scrollspy" id="typography">
                <Typography />
            </div>
            
            <div className="section scrollspy" id="components">
                <Components />
            </div>
            
            <div className="section scrollspy" id="animations">
                <Animations />
            </div>
        </AppLayout>
    );
}