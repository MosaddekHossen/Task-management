import { SortablePane, Pane } from 'react-sortable-pane';

const Tasks = () => {

    return (
        <div>
            <SortablePane direction="horizontal" margin={20} defaultOrder={['0', '1', '2']}>
                <Pane key="0" defaultSize={{ width: '33%', height: 120 }}>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    </div>
                </Pane>
                <Pane key="1" defaultSize={{ width: '33%', height: 120 }}>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    </div>
                </Pane>
                <Pane key="2" defaultSize={{ width: '33%', height: 120 }}>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    </div>
                </Pane>
            </SortablePane>

        </div>
    );
};

export default Tasks;