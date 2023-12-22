import { SortablePane, Pane } from 'react-sortable-pane';

const Tasks = () => {

    return (
        <div>
            <div className="flex justify-between font-bold md:text-4xl text-2xl">
                <h1>To-do</h1>
                <h1>OnGoing</h1>
                <h1>Completed</h1>
            </div>
            <SortablePane className='mt-5' direction="horizontal" margin={20} defaultOrder={['0', '1', '2']}>
                <Pane key="0" defaultSize={{ width: '33%', height: 120 }}>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Daily stand-up</h2>
                            <p>Provide updates on current tasks</p>
                            <h2 className="card-title">2023-01-08</h2>
                            <h2 className="card-title">Low</h2>
                        </div>
                    </div>
                </Pane>
                <Pane key="1" defaultSize={{ width: '33%', height: 120 }}>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Client call</h2>
                            <p>Discuss project requirements with the client</p>
                            <h2 className="card-title">2023-01-12</h2>
                            <h2 className="card-title">High</h2>
                        </div>
                    </div>
                </Pane>
                <Pane key="2" defaultSize={{ width: '33%', height: 120 }}>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Research new technologies</h2>
                            <p>Explore and learn about upcoming technologies</p>
                            <h2 className="card-title">2022-01-08</h2>
                            <h2 className="card-title">Moderate</h2>
                        </div>
                    </div>
                </Pane>
            </SortablePane>

        </div>
    );
};

export default Tasks;