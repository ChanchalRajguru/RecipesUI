import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import RecipeSummaryItem from './RecipeSummary/RecipeSummaryItem'
import RecipeDetails from './RecipeDetails/RecipeDetails'

class App extends Component {

  newRecipeTemplate = {
    id: '',
    name: '',
    author:'',
    preparationTime:'',
    description:''
  }

  state = {
    recipesummaries: [],
    selectedRecipe: null,
    fetchError: false
  }

  fetchRecipeSummaries = () => {
    axios.get('http://localhost:8080/recipes/summary/')
      .then(response => {
        this.setState({
          recipesummaries: response.data,
          selectedRecipe: null,
        });
      }).catch(error => {
       console.log(error.response.status);
        this.setState({
          fetchError: true
        })
      })
  }

  //Update Functionality
  //event will say which of the input fields were changed
  recipeDetailsChangedHandler = (event) => {
    console.log(event.target.value); //what is the 'target' of the input field being edited
    const updatedSelectedRecipe = { ...this.state.selectedRecipe };
    updatedSelectedRecipe[event.target.name] = event.target.value;
    this.setState({ selectedRecipe: updatedSelectedRecipe });
  }

  //Create, update recipe
  saveRecipeHandler = (id) => {
    if (id) {
      axios.put('http://localhost:8080/recipes/', this.state.selectedRecipe)
        .then(response => {
          this.fetchRecipeSummaries();
        })
    } else {
      console.log("here")
      axios.post('http://localhost:8080/recipes/', this.state.selectedRecipe)
        .then(response => {
          this.fetchRecipeSummaries();
        })
    }
  }

  newRecipeHandler = () => {
    this.setState({
      selectedRecipe: this.newRecipeTemplate
    });
  }

  recipeClickHandler = (id) => {
    axios.get('http://localhost:8080/recipes/' + id)
      .then(response => {
        this.setState({
          selectedRecipe: response.data
        });
      })
  }

  //Delete Functionality
  deleteRecipeHandler = (id) => {
    axios.delete('http://localhost:8080/recipes/' + id)
      .then(response => {
        this.fetchRecipeSummaries();
      })
  }

  componentDidMount() {
    this.fetchRecipeSummaries();
  }
  render() {
    let recipeSummariesList = <p>Unable to fetch recipe summaries</p>
    if (!this.state.fetchError) {
      recipeSummariesList = this.state.recipesummaries.map(recipeSummary => {
        return <RecipeSummaryItem
          key={recipeSummary.id}
          id={recipeSummary.id}
          author={recipeSummary.author}
          name={recipeSummary.name}
          clickHandler={() => this.recipeClickHandler(recipeSummary.id)} />
      })
    }

    let recipeDetails = <p>Please select a recipe to view details</p>
    if (this.state.selectedRecipe) {
      recipeDetails = <RecipeDetails recipe={this.state.selectedRecipe}
        valueChanged={(event) => this.recipeDetailsChangedHandler(event)}
        saveClickHandler={() => this.saveRecipeHandler()}
        deleteClickHandler={() => this.deleteRecipeHandler(this.state.selectedRecipe.id)}
        newClickHandler={() => this.newRecipeHandler(this.state.selectedRecipe.id)} />
    }
    return (
      <div>
        {recipeSummariesList}
        <hr />
        {recipeDetails}
      </div>
    );
  }
}
export default App;
