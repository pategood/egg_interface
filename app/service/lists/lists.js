// /**
//  * @description 路由方法-获取列表
//  * @memberof ProjectController
//  */
// async index() {
//   const { ctx } = this;
//   try {
//     // 参数校验
//     ctx.validate(listRule);
//     const { page, size, filter } = ctx.request.body;
//     // 获取结果
//     const result = await ctx.service.project.pagingList({
//       page,
//       size,
//       filter,
//     });
//     // 接口返回
//     ctx.response.success({ data: result });
//   } catch (error) {
//     ctx.response.handleCommonErr(error);
//   }
// }
