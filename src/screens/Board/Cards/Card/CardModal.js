import React, { Component } from 'react';
import styled from 'styled-components';
import { Modal, Icon } from 'antd';
import { CardDetail } from '../../../../components/CardDetail';
import CardLabel from './CardLabel';
import CardDescription from './CardDescription';

class CardModal extends Component {
  state = {
    modalIsVisible: false
  };

  render() {
    const { listKey, card, visible, onOk, onCancel, onEditCard } = this.props;

    return (
      <Modal
        title={
          <CardDetail
            title={<DetailTitle>{card.title}</DetailTitle>}
            icon={<StyledIcon type="project" />}
          />
        }
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        footer={null}
      >
        <Details>
          <CardDetail
            title={<DetailTitle>Labels</DetailTitle>}
            icon={<Icon type="tag" />}
            content={
              <CardLabel
                card={card}
                listKey={listKey}
                onEditCard={onEditCard}
              />
            }
          />

          <CardDetail
            icon={<StyledIcon type="align-left" />}
            title={<DetailTitle>Description</DetailTitle>}
            content={
              <CardDescription
                card={card}
                listKey={listKey}
                onEditCard={onEditCard}
              />
            }
          />
        </Details>
      </Modal>
    );
  }
}

export default CardModal;

const DetailTitle = styled.h4``;

const TagsTitle = styled.h5``;

const Details = styled.div`
  flex-direction: column;
  width: 100%;
  > div {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledIcon = styled(Icon)`
  color: #798d99 !important;
`;
