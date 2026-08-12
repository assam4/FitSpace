import './style.css';
import CollectionItem from './CollectionItem';

export default function Collection({collectionProps}) {
 return (
    <div className="collection_container">
      <div className="collection_content">
        {
            collectionProps && collectionProps.map((item) => {
                return (
                    <CollectionItem key={item.id} src={item.src} text={item.text} />
                )
            })
      
        }
      </div>
    </div>
  )
}

