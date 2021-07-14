import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, downvoteQuote, upvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    const { removeQuote, downvoteQuote, upvoteQuote, quotes, ...otherProps } = this.props;
    const allQuotes = quotes.map(quote => <div key={quote.id}><QuoteCard quote={quote} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote}/></div>);
    
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              { allQuotes }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}

//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, downvoteQuote, upvoteQuote })(Quotes);
