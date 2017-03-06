
import './layer.less';
import tpl from './layer.html';

function layer(){
	return {
		name:'layer',
		tpl:tpl  //把layer模板html文件当做字符串处理
	};
}

export default layer;