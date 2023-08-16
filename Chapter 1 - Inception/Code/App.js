const heading = React.createElement('h1', { id: 'heading', classr: 'first' }, 'Hello World from React !');

const root = ReactDOM.createRoot(document.getElementById('root1'));

//root.render(heading);


/* 
<div id ="parent">
    <div id="child">
        <h1>
        Iam h1 
        </h1>
        <h2>
        iam h2
        </h2>
    </div>
</div>
*/
const div = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' }, [React.createElement('h1', { id: 'h1'}, 'Iam h1 tag'),
    React.createElement('h2', { id: 'h2' }, 'Iam h2 tag')]));
root.render(div);

console.log(div)