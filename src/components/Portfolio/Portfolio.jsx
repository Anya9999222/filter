import './Portfolio.css'
import { ProjectList } from '../ProjectList/ProjectList';
import { Toolbar } from '../Toolbar/Toolbar';
import { useState } from 'react';

export const Portfolio = ({cards}) => {
    console.log(cards)
    const filters = ["All", "Websites", "Flayers", "Business Cards"]
    const [tabCurrent, setTabCurrent] = useState("All")
    const cardsFiltered = cards.filter(item => {
        if(tabCurrent === "All"){
          return cards
        }
        return item.category.includes(tabCurrent)
      })
      
      const onSelectedFilter = (tab) => {
        setTabCurrent(tab)
      }
   let id = 0;
    return(
      
      <div className="main-content">
          <Toolbar 
          onSelect={onSelectedFilter} 
          tabCurrent={tabCurrent} 
          filters = {filters} />
        <div className="container">
          {cardsFiltered.map(item =>{
            id += 1;
            return(<ProjectList cards = {item} id = {id} />)
          } )} 
        </div>
    </div>
    );
}