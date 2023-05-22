interface MainLevelConfigurationInterface {
  levelSizeZ: number
  levelSizeX: number
  levelSizeY: number
  roadStartX: number
  roadEndX: number
  roadWidth: number
}

const mainLevelConfiguration: MainLevelConfigurationInterface = {
  roadEndX: 10,
  roadStartX: 0,
  roadWidth: 10,
  levelSizeX: 1000,
  levelSizeY: 1,
  levelSizeZ: 10000,
}

export default mainLevelConfiguration
