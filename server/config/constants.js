const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  vault: {
    name: 'Vault',
    endpoint: 'vaults',
    useCustomRoutes: true
  },
  keep: {
    name: 'Keep',
    endpoint: 'keeps',
    
  },
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  }
}

export  {
  actions,
  models
}