export default function Card(props) {
    return (
        <div className="flex flex-1 flex-col mb-0.5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex-1 flex-col w-full h-3/6">
                <img className="w-full h-40 object-cover rounded-t-lg" src={props.photo}></img>
            </div>
            <div className="flex-1 flex-col w-full h-2/6 overflow-auto p-5">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h1>
                <hr></hr>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
            </div>
            <div className="flex-1 flex-col w-full h-1/6 p-5">
                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href="#">Read more</a>
            </div>      
        </div>
    );
}