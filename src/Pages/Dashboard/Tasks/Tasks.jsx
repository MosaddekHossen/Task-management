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
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </Pane>
                <Pane key="1" defaultSize={{ width: '33%', height: 120 }}>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </Pane>
                <Pane key="2" defaultSize={{ width: '33%', height: 120 }}>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </Pane>
            </SortablePane>

        </div>
    );
};

export default Tasks;