import React from 'react';

//props is going to be the selected recipe
const recipeDetails = (props) => {
    return (
        <div>
            <section>
                <label>ID: </label><input type='text' name='id' disabled={true} value={props.recipe.id} /><br/>
                <label>Name: </label><input type='text' name='name'  value={props.recipe.name} onChange={props.valueChanged}/><br/>
                <label>Author: </label><input type='text' name='author'  value={props.recipe.author} onChange={props.valueChanged}/><br/>
                <label>Preparation Time: </label><input type='text' name='preparationTime'  value={props.recipe.preparationTime} onChange={props.valueChanged}/><br/>
                <label>Description: </label><br/><textarea  name='description' row='10' cols='50' value={props.recipe.description} onChange={props.valueChanged}/><br/>
            </section>
            <section>
                <button onClick={props.newClickHandler}>New</button>    
                <button onClick={props.saveClickHandler}>Save</button>    
                <button onClick={props.deleteClickHandler}>Delete</button>    
            </section>
        </div>
    );
} 

export default recipeDetails;