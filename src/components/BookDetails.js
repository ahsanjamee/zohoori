import React from 'react'

const BookDetails = ({ props }) => {
    return (
        <div>
            {/* { match.params.id } */}
            {console.log(props.data)}
        </div>
    )
}

export default BookDetails
