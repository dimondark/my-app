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
        		Name : '',
        		CBHeader: false,
        		Header: '',
        		CBText: false,	
        		Text: '',
        		Page: '',
        		CBStamina: false,
        		Stamina: '0',
        		CBHealth: false,
        		Health: '0',
        		CBTime: false,
        		Time: '0',	
        		HideStats: false,
        		Allow: '',
        		RandomChance: '100',
        		FullCard: false,
        		CBSetStamina: false,
        		SetStamina: '0',
        		CBSetHealth: false,
        		SetHealth: '0',
        		CBSetTime: false,
        		SetTime: '0',
        		CBAvatar: false,
        		Avatar: '',
        		CBRestCard: false,	
        		RestCard: ''}]
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
        Name: evt.target.value};
    });
    this.setState({ cards: newCards });
  }

  handleCardHeaderChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        Header: evt.target.value,
    	CBHeader: true };
    });
    this.setState({ cards: newCards });
  }

  handleCardTextChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        Text: evt.target.value,
      CBText: true };
    });
    this.setState({ cards: newCards });
  }

  handleCardPageChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        Page: evt.target.value};
    });
    this.setState({ cards: newCards });
  }

  handleCardStaminaChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        Stamina: evt.target.value };
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
        Health: evt.target.value };
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
        Time: evt.target.value };
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
        HideStats: !card.HideStats};
    });
    this.setState({ cards: newCards });
  }

  handleCardAllowChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        Allow: evt.target.value};
    });
    this.setState({ cards: newCards });
  }

  handleCardRandomChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        RandomChance: evt.target.value};
    });
    this.setState({ cards: newCards });
  }

  handleCardFullChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        FullCard: !card.FullCard};
    });
    this.setState({ cards: newCards });
  }

  handleCardSetStaminaChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        SetStamina: evt.target.value,
    	CBSetStamina: true };
    });
    this.setState({ cards: newCards });
  }

  handleCardSetHealthChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        SetHealth: evt.target.value,
    	CBSetHealth: true };
    });
    this.setState({ cards: newCards });
  }

  handleCardSetTimeChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        SetTime: evt.target.value, 
    	CBSetTime: true };
    });
    this.setState({ cards: newCards });
  }

  handleCardCBAvatarChange = (idx) => (evt) => {
  	  const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
    	CBAvatar: !card.CBAvatar };
    });
    this.setState({ cards: newCards });
  }

  handleAvatarChange = (idx) => (evt) => {
  	  const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
    	Avatar: evt.target.value };
    });
    this.setState({ cards: newCards });
  }

  handleCBCardRestChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        CBRestCard: !card.CBRestCard};
    });
    this.setState({ cards: newCards });
  }

  handleRestCardChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        RestCard: evt.target.value};
    });
    this.setState({ cards: newCards });
  }

	handleAddCard = () => {
		this.setState({
			cards: this.state.cards.concat([{ 
        		Name : '',
        		CBHeader: false,
        		Header: '',
        		CBText: false,	
        		Text: '',
        		Page: '',
        		CBStamina: false,
        		Stamina: '0',
        		CBHealth: false,
        		Health: '0',
        		CBTime: false,
        		Time: '0',	
        		HideStats: false,
        		Allow: '',
        		RandomChance: '100',
        		FullCard: false,
        		CBSetStamina: false,
        		SetStamina: '0',
        		CBSetHealth: false,
        		SetHealth: '0',
        		CBSetTime: false,
        		SetTime: '0',
        		CBAvatar: false,
        		Avatar: '',
        		CBRestCard: false,	
        		RestCard: ''}])
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

    const restCardSelection = [
    	'Card_Action_Sleep',
    	'Card_Action_Eat',
    	'Card_Action_ChillOut'
    ];

  	return (
  		<div>
  			<label>
        Set Stamina:
        <input
          onChange={this.handleCardSetStaminaChange(idx)}
          value={card.SetStamina}
          type="text" />
      </label>
      <label>
        Set Health:
        <input
          onChange={this.handleCardSetHealthChange(idx)}
          value={card.SetHealth}
          type="text" />
      </label>
      <label>
        Set Time:
        <input
          onChange={this.handleCardSetTimeChange(idx)}
          value={card.SetTime}
          type="text" />
      </label>
      <br />
      <label>
        Avatar:
        <input
          onChange={this.handleCardCBAvatarChange(idx)}
          checked={card.CBAvatar}
          type="checkbox" />
      </label>
      <Select
          placeholder={'Vyberte noveho avatara'}
          controlFunc={this.handleAvatarChange(idx)}
          options={avatarSelection}
          selectedOption={card.Avatar} />
      <label>
        Rest card:
        <input
          onChange={this.handleCBCardRestChange(idx)}
          checked={card.CBRestCard}
          type="checkbox" />
      </label>
      <Select
          placeholder={'Vyberte kartu pro doplnění energie'}
          controlFunc={this.handleRestCardChange(idx)}
          options={restCardSelection}
          selectedOption={card.RestCard} />
      </div>
  	);
  }

  CardItem(card, idx) {
    const cardNameSelection = [
      'Card_Menu_Again',
      'Card_Menu_Quit',
      'Card_Action_Fight',
      'Card_Action_Talk',
      'Card_Action_Buy',
      'Card_Action_Sell',
      'Card_Action_Read',
      'Card_Action_Find',
      'Card_Action_Steal',
      'Card_Action_Sleep',
      'Card_Action_Eat',
      'Card_Action_Action',
      'Card_Action_ChillOut',
      'Card_Action_Go',
      'Card_Action_Stay',
      'Card_Action_GoBack',
      'Card_Action_GoLeft',
      'Card_Action_GoRight',
      'Card_Action_GoUp',
      'Card_Action_GoDown',
      'Card_Action_ForrestRoad',
      'Card_Action_PlainRoad',
      'Card_Action_MountainRoad',
      'Card_Action_Sail',
      'Card_Action_Fly',
      'Card_Action_Run',
      'Card_Action_Jump',
      'Card_Bonus_Luck',
      'Card_Bonus_Bless',
      'Card_Bonus_Miracle'
    ];

    const cardAllowSelection = [
    	'Hrdina 1',
    	'Hrdina 2',
    	'Hrdina 3'
    ]

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
          value={card.Header}
          onChange={this.handleCardHeaderChange(idx)}
          type="text" />
      </label>
      <br />
      <label>
        Text:
        <input
          onChange={this.handleCardTextChange(idx)}
          value={card.Text}
          type="text" />
      </label>
      <label>
        Page:
        <input
          onChange={this.handleCardPageChange(idx)}
          value={card.Page}
          type="text" />
      </label>
      <br />
      <ValueEdit
        cbControlFunc={this.handleCBStaminaChange(idx)}
        cbValue={card.CBStamina}
        value={card.Stamima}
        controlFunc={this.handleCardStaminaChange(idx)}
        label={'Stamima'} /> 
      <ValueEdit
        cbControlFunc={this.handleCBHealthChange(idx)}
        cbValue={card.CBHealth}
        value={card.Health}
        controlFunc={this.handleCardHealthChange(idx)}
        label={'Health'} />
      <ValueEdit
        cbControlFunc={this.handleCBTimeChange(idx)}
        cbValue={card.CBTime}
        value={card.Time}
        controlFunc={this.handleCardTimeChange(idx)}
        label={'Time'} />
      <label>
        Hide stats:
        <input
          onChange={this.handleCardHideStatsChange(idx)}
          checked={card.HideStats}
          type="checkbox" />
      </label>
      <Select
          placeholder={'Pro koho je karta povolena'}
          controlFunc={this.handleCardAllowChange(idx)}
          options={cardAllowSelection}
          selectedOption={card.Allow} />
      <label>
        randomChance:
        <input
          onChange={this.handleCardRandomChange(idx)}
          value={card.RandomChance}
          type="text" />
      </label>
      <label>
        Full card:
        <input
          onChange={this.handleCardFullChange(idx)}
          checked={card.FullCard}
          type="checkbox" />
      </label>
      {card.FullCard && this.renderFullCard(card, idx)}
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