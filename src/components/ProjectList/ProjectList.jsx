import './ProjectList.css'

export const ProjectList = ({cards, id}) => {

    return(
    <div className= {"card"}>
        <img className="card-image" src={cards.img} alt = ''/>
    </div>
    );
}