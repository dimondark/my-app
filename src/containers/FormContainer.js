import React from 'react';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import ValueEdit from '../components/ValueEdit';

const buildState = () => ({
		pageName: '',
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
    this.handlePageNameTextChange = this.handlePageNameTextChange.bind(this);
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

    if (this.state.cards.length === 0) {
      window.confirm('Pro export je nutne vyplnit alespon jednu kartu');
      return;
    }

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
    element.download = this.state.pageName + '.xml';
    element.click();

    this.handleClearForm(e);
  }

  handlePageNameTextChange(e) {
    this.setState({pageName: e.target.value});
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
        stamina: evt.target.value };
    });
    this.setState({ cards: newCards });
  }

  handleCBStaminaChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        CBStamina: !card.CBStamina };
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

  handleCBHealthChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        CBHealth: !card.CBHealth };
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

  handleCBTimeChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        CBTime: !card.CBTime };
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
    const avatarSelection = [
      'Avatar 1',
      'Avatar 2',
      'Avatar 3',
      'Avatar 4'
    ];

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
      <Select
          placeholder={'Vyberte noveho avatara'}
          options={avatarSelection} />
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
    const cardNameSelection = [
      'CardName 1',
      'CardName 2',
      'CardName 3'
    ];

    return (
      <div className="cards">
        <Select
          placeholder={'Zvolte jmeno karty'}
          controlFunc={this.handleCardNameChange(idx)}
          options={cardNameSelection}
          selectedOption={this.state.CardName} />
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
      <ValueEdit
        cbControlFunc={this.handleCBStaminaChange(idx)}
        cbValue={card.CBStamina}
        value={card.stamina}
        controlFunc={this.handleCardStaminaChange(idx)}
        label={'Stamima'} /> 
      <ValueEdit
        cbControlFunc={this.handleCBHealthChange(idx)}
        cbValue={card.CBHealth}
        value={card.health}
        controlFunc={this.handleCardHealthChange(idx)}
        label={'Health'} />
      <ValueEdit
        cbControlFunc={this.handleCBTimeChange(idx)}
        cbValue={card.CBTime}
        value={card.time}
        controlFunc={this.handleCardTimeChange(idx)}
        label={'Time'} />
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
                title={"Jak se tato stranka bude jmenovat (toto pole bude pouzito pro export)"}
                rows={1}
                resize={false}
                content={this.state.pageName}
                controlFunc={this.handlePageNameTextChange}
                placeholder={'1, 2, 3...'} />
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