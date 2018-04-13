import request from '@/utils/request'

let API_URL = {};

let isDebug = process.env.NODE_ENV == "development";

//moduleName规则： 主表用驼峰法命名，子表用_连接
if(isDebug) {
  API_URL = {
    //设备类型
    typeDevice: "/typeDevice/list.json",
    //管理域
    magDomain: "/magDomain/list.json",
    magDomain_electricitySubstation: "/magDomain/magDomain_electricitySubstation.json",
    //网关
    deviceGateway: "/deviceGateway/list.json",
    deviceGateway_instructions: "/deviceGateway/deviceGateway_instructions.json",
    //企业
    tree: "/enterprise/tree.json",
    customer: "/enterprise/customer.json",
    //变电所
    electricitySubstation: "/enterprise/electricitySubstation.json",
    electricitySubstation_video: "/enterprise/electricitySubstation_video.json",
    electricitySubstation_pic: "/enterprise/electricitySubstation_pic.json",
    //进线柜 变压器
    deviceIncomingCabinet: "/enterprise/deviceIncomingCabinet.json",
    deviceTransformer_connection: "/enterprise/deviceTransformer_connection.json",
    //电容柜
    deviceCapacitorCabinet: "/enterprise/deviceCapacitorCabinet.json",
    //馈电柜
    deviceLowCabinet: "/enterprise/deviceLowCabinet.json",
    deviceLowCabinet_pic: "/enterprise/deviceLowCabinet_pic.json",
  }
}

export function fetchList(moduleName, data) {
  return request({
    url: API_URL[moduleName],
    method: 'get',
    params: data
  })
}

export function insertData(moduleName, data) {
  return request({
    url: isDebug ? '/success.json' : `/${moduleName}/insert`,
    method: 'post',
    data
  })
}

export function updateData(moduleName, data) {
  return request({
    url: isDebug ? '/success.json' : `/${moduleName}/update`,
    method: 'post',
    data
  })
}

export function deleteData(moduleName, data) {
  return request({
    url: isDebug ? '/success.json' : `/${moduleName}/delete`,
    method: 'post',
    data
  })
}
