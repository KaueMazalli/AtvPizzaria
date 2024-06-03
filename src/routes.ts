import { Router } from 'express';
import multer from 'multer';



import { CreateUserController } from './controllers/user/createUserController';
import { AuthUserController } from './controllers/user/authUserController';
import { DetailUserController } from './controllers/user/detailUserController';
import { CreateCategoryController } from './controllers/category/createCategoryController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { listCategoryController } from './controllers/category/listCategoryController';
import { CreateProductController } from './controllers/product/createProductController';

import uploadConfig from './config/multer';
import listByCategoryController from './controllers/product/listByCategoryController';
import CreateOrderController from './controllers/order/createOrderController';
import RemoveOrderController from './controllers/order/removeOrderController';
import AddItemController from './controllers/order/addItemController';
import sendOrderController from './controllers/order/sendOrderController';
import RemoveItemOrderController from './controllers/order/removeItemOrderController';
import ListOrderController from './controllers/order/listOrderController';
import ListByFinishedController from './controllers/order/listByFinishedController';
import ListByUnfinishedController from './controllers/order/listByUnfinishedController';
import FinishOrderController from './controllers/order/finishOrderController';


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);

router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/category/list', isAuthenticated, new listCategoryController().handle);

router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/product/list', isAuthenticated, new listByCategoryController().handle);

router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order/delete', isAuthenticated, new RemoveOrderController().handle);
router.post('/order/addItem', isAuthenticated, new AddItemController().handle);
router.delete('/order/removeItem', isAuthenticated, new RemoveItemOrderController().handle)
router.put('/order/send', isAuthenticated, new sendOrderController().handle);
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle);
router.get('/order/list', isAuthenticated, new ListOrderController().handle);
router.get('/order/listFinished', isAuthenticated, new ListByFinishedController().handle);
router.get('/order/listUnfinished', isAuthenticated, new ListByUnfinishedController().handle)

export {router};
