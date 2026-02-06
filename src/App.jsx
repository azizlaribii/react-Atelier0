import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import LifecycleDemo from './LifecycleDemo';
import UpdatingDemo from './LifeCycleUpdate';
import Counter from './components/Counter';
import ColorBox from './components/ColorBox';
import GradeManager from './components/GradeManager';
import ListManager from './components/ListManager';
import Events from './components/Events';

function App() {
    const [showEvents, setShowEvents] = useState(false);

    return (
        <div style={{ padding: '25px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>React Components Workshop</h1>

            {/* Button to toggle Events */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <button
                    className="btn btn-primary btn-lg"
                    onClick={() => setShowEvents(!showEvents)}
                >
                    {showEvents ? 'Hide Events' : 'Show Events'}
                </button>
            </div>

            {/* Events Component - Conditionally Rendered */}
            {showEvents && <Events />}

            {/* Lifecycle Components */}
            <LifecycleDemo />
            <UpdatingDemo />

            {/* Custom Components */}
            <Counter initialCount={0} step={1} />
            <Counter initialCount={10} step={5} />

            <ColorBox
                initialColor="#3498db"
                colorOptions={['#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c']}
            />

            <GradeManager initialNotes={[15, 12.5, 18]} />

            <ListManager
                initialItems={['React', 'JavaScript', 'CSS']}
                placeholder="Ajouter une technologie"
            />
        </div>
    );
}

export default App;
