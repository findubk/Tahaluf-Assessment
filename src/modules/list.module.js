import listApi from 'src/services/list.service';
import { localStorageUtil } from 'src/utils/utils';

export const fetchList = async () => {
  let { data, status } = await listApi.getList();
  if (status == 200) {
    localStorageUtil.setItem('universitiesList', data);
    return { data, success: true };
  } else {
    const data = localStorageUtil.getItem('universitiesList');
    if (data) return { data, success: true };

    return { error: 'Something went wrong!', success: false };
  }
};
