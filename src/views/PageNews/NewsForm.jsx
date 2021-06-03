import React, { useState } from "react";
import { connect } from "react-redux";
import { addNews } from "../../actions/actionNews.js";

const mapDispatchToProps = (dispatch) => ({
  addNews: (news) => {
    dispatch(addNews(news));
  }
});

const NewsForm = (props) => {
  const [title, setTitle] = useState('');
  const [describe, setDescribe] = useState('');

  const handleAddNews = () => {
    props.addNews({
      id: Math.random(),
      title,
      describe
    });
    setTitle('');
    setDescribe('');
  }
  
  return (
    <div>
      名稱：
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
      />
      敘述：
      <input
        value={describe}
        onChange={(e) => setDescribe(e.target.value)} 
      />
      <button 
        type="button" 
        onClick={() => handleAddNews()}
      >
        新增最新消息
      </button>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(NewsForm);