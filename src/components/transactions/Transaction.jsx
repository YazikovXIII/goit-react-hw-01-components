import PropTypes from 'prop-types';
import { WrapperCard } from 'components/profile/Profile.styled';
import {
  TransHistoryTable,
  TransHead,
  TransHeadTr,
  TransHeadTh,
  TransTBody,
  TransBodyTr,
  TransBodyTd,
} from './Transactions.styled';

export const Transactions = ({ data }) => {
  return (
    <WrapperCard>
      <TransHistoryTable>
        <TransHead>
          <TransHeadTr>
            <TransHeadTh>Type</TransHeadTh>
            <TransHeadTh>Amount</TransHeadTh>
            <TransHeadTh>Currency</TransHeadTh>
          </TransHeadTr>
        </TransHead>
        <TransTBody>
          {data.map(({ id, type, amount, currency }) => {
            return (
              <TransBodyTr key={id}>
                <TransBodyTd>{type}</TransBodyTd>
                <TransBodyTd>{amount}</TransBodyTd>
                <TransBodyTd>{currency}</TransBodyTd>
              </TransBodyTr>
            );
          })}
        </TransTBody>
      </TransHistoryTable>
    </WrapperCard>
  );
};

Transactions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
