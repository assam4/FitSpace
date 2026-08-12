import { arrowIcon } from '../../constants';

export default function CollectionItem({ id, src, text }) {
  return (
    <div className="content_container" key={id}>
      <div className="collection_content_container">
        <div className="collection_content_img_container">
          <div className="collection_arrow_container">
            <img className="collection_arrow_icon" src={arrowIcon} alt="arrow icon" />
          </div>
          <img className="collection_content_img" src={src} alt="collection img" />
        </div>
        <div className="collection_content_text_container">
          <p className="collection_content_text">{text}</p>
        </div>
      </div>
    </div>
  );
}
