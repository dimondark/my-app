import React from 'react';

class App extends React.Component {

	constructor() {
		super();

		this.state = {
      pageText: '',
      servicePage: false,
      restoreStats: false,
			cards: [{ 
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
        restCard: false}]
		};

    this.handlePageTextChange = this.handlePageTextChange.bind(this);
	  this.handleServicePageChange = this.handleServicePageChange.bind(this);
    this.handleRestoreStatsChange = this.handleRestoreStatsChange.bind(this);
  }

  exportPage = () => {
    console.log('exportPage button clicked')

    // https://www.npmjs.com/package/xmlbuilder
    var builder = require('xmlbuilder');
    var feedObj = {
      PageAttributes: {
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
        header: evt.target.value};
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
        text: evt.target.value};
    });
    this.setState({ cards: newCards });
  }

  handleCardStaminaChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        stamina: evt.target.value};
    });
    this.setState({ cards: newCards });
  }

  handleCardHealthChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        health: evt.target.value};
    });
    this.setState({ cards: newCards });
  }

  handleCardTimeChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        time: evt.target.value};
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
        setStamina: evt.target.value};
    });
    this.setState({ cards: newCards });
  }

  handleCardSetHealthChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        setHealth: evt.target.value};
    });
    this.setState({ cards: newCards });
  }

  handleCardSetTimeChange = (idx) => (evt) => {
    const newCards = this.state.cards.map((card, sidx) => {
      if (idx !== sidx) return card;
      return { ...card, 
        setTime: evt.target.value};
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
      <br />
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
      <br />
      <br />
    </div>  
    );  
  }
 
	render() {
    	return (
          <form>
          	<label>
          		Page text:
          		<input
                value={this.state.pageText}
                onChange={this.handlePageTextChange}
            		type="text" />
        	</label>
        	<br />
        	<label>
          		Service page:
          		<input
                value={this.state.servicePage}
                onChange={this.handleServicePageChange}
            		type="checkbox" />
        	</label>
        	<br />
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
          <button
            type='button'
            onClick={this.exportPage}
            >Export Page</button>
          </form>
        );
    }
}

export default App;