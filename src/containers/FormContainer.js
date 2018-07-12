import React from 'react';
import TextArea from '../components/TextArea';

const buildState = () => ({
		pageText: '',
      		servicePage: false,
      		restoreStats: false,
			cards: [{ 
        		name: '',
        		CBHeader: false,
        		header: '',
        		CBText: false,	
        		text: '',
        		page: '',
        		CBStamina: false,
        		stamina: '',
        		CBHealth: false,
        		health: '',
        		CBTime: false,
        		time: '',	
        		hideStats: false,
        		allow: false,
        		randomChance: '',
        		fullCard: false,
        		CBSetStamina: false,
        		setStamina: '',
        		CBSetHealth: false,
        		setHealth: '',
        		CBSetTime: false,
        		setTime: '',
        		CBRestCard: false,	
        		restCard: false}]
	});

class FormContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {...buildState()};
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
    	this.handlePageTextChange = this.handlePageTextChange.bind(this);
		this.handleServicePageChange = this.handleServicePageChange.bind(this);
    	this.handleRestoreStatsChange = this.handleRestoreStatsChange.bind(this);
  }

  handleClearForm(e) {
  	e.preventDefault();
  	this.setState({...buildState()})
  }

  handleFormSubmit(e) {
  	e.preventDefault();
  	console.log('exportPage button clicked')

    // https://www.npmjs.com/package/xmlbuilder
    var builder = require('xmlbuilder');
    var feedObj = {
      PageAtributes: {
        PageText: {
          '#text': this.state.pageText
        },
        ServicePage: {
          '#text': this.state.servicePage
        },
        RestoreStats: {
          '#text': this.state.restoreStats
        },
        AllCards: {
          'Card': this.state.cards 
        }
      }
    }
    var xml = builder.create(feedObj, { version: '1.0', encoding: 'windows-1250' });

    console.log(xml.end({ pretty: true }));

    var element = document.createElement("a");
    var file = new Blob([xml], {type: 'application/xml'});
    element.href = URL.createObjectURL(file);
    element.download = this.state.pageText + '.xml';
    element.click();

    this.handleClearForm(e);
  }
  
  handlePageTextChange(e) {
   this.setState({pageText: e.target.value});
  }

  handleServicePageChange(e) {
    this.setState({servicePage: !this.state.servicePage});
  }

  handleRestoreStatsChange(e) {
    this.setState({restoreStats: !this.state.restoreStats});
  }

  handleCardNameChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        name: evt.target.value};
    });
    this.setState({ cards: newCards });
  }

  handleCardHeaderChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        header: evt.target.value,
    	CBHeader: true };
    });
    this.setState({ cards: newCards });
  }

  handleCardPageChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        page: evt.target.value};
    });
    this.setState({ cards: newCards });
  }

  handleCardTextChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        text: evt.target.value,
    	CBText: true };
    });
    this.setState({ cards: newCards });
  }

  handleCardStaminaChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        stamina: evt.target.value, 
    	CBStamina: true };
    });
    this.setState({ cards: newCards });
  }

  handleCardHealthChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        health: evt.target.value,
    	CBHealth: true };
    });
    this.setState({ cards: newCards });
  }

  handleCardTimeChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        time: evt.target.value, 
    	CBTime: true };
    });
    this.setState({ cards: newCards });
  }

  handleCardHideStatsChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        hideStats: !card.hideStats};
    });
    this.setState({ cards: newCards });
  }

  handleCardAllowChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        allow: !card.allow};
    });
    this.setState({ cards: newCards });
  }

  handleCardRandomChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        randomChance: evt.target.value};
    });
    this.setState({ cards: newCards });
  }

  handleCardFullChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        fullCard: !card.fullCard};
    });
    this.setState({ cards: newCards });
  }

  handleCardSetStaminaChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        setStamina: evt.target.value,
    	CBSetStamina: true };
    });
    this.setState({ cards: newCards });
  }

  handleCardSetHealthChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        setHealth: evt.target.value,
    	CBSetHealth: true };
    });
    this.setState({ cards: newCards });
  }

  handleCardSetTimeChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        setTime: evt.target.value, 
    	CBSetTime: true };
    });
    this.setState({ cards: newCards });
  }

  handleCardRestChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        restCard: !card.restCard};
    });
    this.setState({ cards: newCards });
  }

	handleAddCard = () => {
		this.setState({
			cards: this.state.cards.concat([{ 
        name: '',
        header: '',
        text: '',
        page: '',
        stamina: '',
        health: '',
        time: '',
        hideStats: false,
        allow: false,
        randomChance: '',
        fullCard: false,
        setStamina: '',
        setHealth: '',
        setTime: '',
        restCard: false}])
		});
	}

  handlerRemoveCard = (idx) => () => {
    this.setState({
      cards: this.state.cards.filter((s, sidx) => idx !== sidx)
    });
  }

  renderFullCard(card, idx) {
  	return (
  		<div>
  			<label>
        Set Stamina:
        <input
          onChange={this.handleCardSetStaminaChange(idx)}
          value={card.setStamina}
          type="text" />
      </label>
      <label>
        Set Health:
        <input
          onChange={this.handleCardSetHealthChange(idx)}
          value={card.setHealth}
          type="text" />
      </label>
      <label>
        Set Time:
        <input
          onChange={this.handleCardSetTimeChange(idx)}
          value={card.setTime}
          type="text" />
      </label>
      <br />
      <label>
        Avatar:
        <input
          name="Avatar"
          type="text" />
      </label>
      <label>
        Rest card:
        <input
          onChange={this.handleCardRestChange(idx)}
          checked={card.restCard}
          type="checkbox" />
      </label>
      </div>
  		);
  }

  CardItem(card, idx) {
    return (
      <div className="cards">
        <input
          type="text"
          placeholder={'Card name #${idx + 1}'}
          value={card.name}
          onChange={this.handleCardNameChange(idx)}
          />
        <button 
          type="button" 
          onClick={this.handlerRemoveCard(idx)} 
          className="small">-</button>
      <br />       
      <label>
        Header:
        <input
          value={card.header}
          onChange={this.handleCardHeaderChange(idx)}
          type="text" />
      </label>
      <br />
      <label>
        Text:
        <input
          onChange={this.handleCardTextChange(idx)}
          value={card.text}
          type="text" />
      </label>
      <label>
        Page:
        <input
          onChange={this.handleCardPageChange(idx)}
          value={card.page}
          type="text" />
      </label>
      <br />
      <label>
        Stamina:
        <input
          onChange={this.handleCardStaminaChange(idx)}
          value={card.stamina}
          type="text" />
      </label>
      <label>
        Health:
        <input
          onChange={this.handleCardHealthChange(idx)}
          value={card.health}
          type="text" />
      </label>
      <label>
        Time:
        <input
          onChange={this.handleCardTimeChange(idx)}
          value={card.time}
          type="text" />
      </label>
      <br />
      <label>
        Hide stats:
        <input
          onChange={this.handleCardHideStatsChange(idx)}
          checked={card.hideStats}
          type="checkbox" />
      </label>
      <label>
        Allow:
        <input
          onChange={this.handleCardAllowChange(idx)}
          checked={card.allow}
          type="checkbox" />
      </label>
      <label>
        randomChance:
        <input
          onChange={this.handleCardRandomChange(idx)}
          value={card.randomChance}
          type="text" />
      </label>
      <label>
        Full card:
        <input
          onChange={this.handleCardFullChange(idx)}
          checked={card.fullCard}
          type="checkbox" />
      </label>
      {card.fullCard && this.renderFullCard(card, idx)}
      <br />
      <br />
    </div>  
    );  
  }
 
	render() {
    	return (
          <form className="container" onSubmit={this.handleFormSubmit}>
          	<h5>Page Data Form</h5>
          	<TextArea
          			title={"Popište událost odehrávající se na této obrazovce."}
          			rows={5}
          			resize={false}
          			content={this.state.pageText}
          			name={'pageText'}
          			controlFunc={this.handlePageTextChange}
          			placeholder={'Prosím buďtě v popisu důkladní'} />
        	<br />
        	<label>
          		Service page:
          		<input
                value={this.state.servicePage}
                onChange={this.handleServicePageChange}
            		type="checkbox" />
        	</label>
        	<label>
          		Restore stats:
          		<input
            		value={this.state.restoreStats}
                onChange={this.handleRestoreStatsChange}
            		type="checkbox" />
        	</label>
        	<br />
          <br />    
        	{this.state.cards.map((card, idx) => (
            this.CardItem(card, idx) 
          ))}
        	<button
        		type='button'
        		onClick={this.handleAddCard}
        		>Add card</button>
          <br/>
          <input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"/>  
          <button
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form</button>
          </form>
        );
    }
}

export default FormContainer;