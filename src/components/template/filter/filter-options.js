import React from 'react';
import FilterStyle from './styles/filter-style';
const FilterOptions = (props) => {
    console.log(props.categories)
    let uniqueCategories = [...new Set(props.categories)];
    const categories = uniqueCategories.map(cat => (
        <div>
            <input type="checkbox" id={cat} name="scales" />
            <label for={cat}>{cat}</label>
        </div>
    ))
    return (
    <>
    {
        props.open ? 
        <>
        <button className="filter animate-filter" ariaLabel="filter-blogs" onClick={() => props.click(!props.open) }>X</button>
        <FilterStyle>
            <h4 className="title">Options</h4>
            <section className="categories">
                <p>Categories</p>
                {categories}
            </section>
        </FilterStyle>
        </>
        :
        <button className="filter" ariaLabel="filter-blogs" onClick={() => props.click(!props.open) }>+</button>
    }
    </>
)}

export default FilterOptions;