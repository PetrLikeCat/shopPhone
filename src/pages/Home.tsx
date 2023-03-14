import React from 'react';
import { useSelector } from 'react-redux';


import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { selectPhoneData } from '../redux/phone/selectors';
import { setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { fetchPhone } from '../redux/phone/asyncActions';
import { Categories, Sort, PhoneBlock, Skeleton, Pagination, } from '../components';
import { Carousels } from '../components/Carousel';
import { ErrorMessage } from '../components/ErrorMessage';

const Home: React.FC = () => {
  const { items, status } = useSelector(selectPhoneData);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const dispatch = useAppDispatch();

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPhone = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;

    dispatch(
      fetchPhone({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );
  };

  React.useEffect(() => {
    getPhone();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);



  const phone = items.map((obj: any) => <PhoneBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="container__carousels">
        <Carousels />
      </div>
      <div className="content__top">
        <Sort value={sort} />
      </div>
      <div className="content__card">
        <div>
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        </div>
        {status === 'error' ? (
          <ErrorMessage />
        ) : (
          <div className="content__items">{status === 'loading' ? skeletons : phone}</div>
        )}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
