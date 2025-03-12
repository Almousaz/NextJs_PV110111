


export default function Profile(){

    let information = { name:'Ali' , city : 'JAX' , job : 'Web Dev'}
    
    return(
        <div>
            <h1>{information.name}</h1>
            <h1>{information.job}</h1>
            <h1>{information.city}</h1>
        </div>
    )

}