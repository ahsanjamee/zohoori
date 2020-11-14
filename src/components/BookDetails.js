import React from 'react'

const BookDetails = ({ match }) => {
    return (
        <div>
            { match.params.id }
            {/* {console.log(props.data)} */}
        </div>
    )
}

export default BookDetails
