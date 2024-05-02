import listApi from 'src/services/list.service';
import { localStorageUtil } from 'src/utils/utils';

// Fetch list of universities and handle api responses
// used modules if multiple api services are used
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
