import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

function loadTexture(path) {
  const texture = textureLoader.load(path);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const textures = {
  dirt: loadTexture("textures/dirt.png"),
  grass: loadTexture("textures/grass.png"),
  grassSide: loadTexture("textures/grass_side.png"),
  stone: loadTexture("textures/stone.png"),
  coalOre: loadTexture("textures/coal_ore.png"),
  ironOre: loadTexture("textures/iron_ore.png"),
};

export const blocks = {
  empty: {
    id: 0,
    name: "empty",
  },

  grass: {
    id: 1,
    name: "grass",
    color: 0x559020,
    material: [
      new THREE.MeshLambertMaterial({ map: textures.grassSide }),
      new THREE.MeshLambertMaterial({ map: textures.grassSide }),
      new THREE.MeshLambertMaterial({ map: textures.grass }),
      new THREE.MeshLambertMaterial({ map: textures.dirt }),
      new THREE.MeshLambertMaterial({ map: textures.grassSide }),
      new THREE.MeshLambertMaterial({ map: textures.grassSide }),
    ],
  },

  dirt: {
    id: 2,
    name: "dirt",
    color: 0x908020,
    material: new THREE.MeshLambertMaterial({ map: textures.dirt }),
  },
  stone: {
    id: 3,
    name: "stone",
    color: 0x808080,
    material: new THREE.MeshLambertMaterial({ map: textures.stone }),
    scale: { x: 30, y: 30, z: 30 },
    scarcity: 0.5,
  },
  coalOre: {
    id: 4,
    name: "coalOre",
    material: new THREE.MeshLambertMaterial({ map: textures.coalOre }),
    color: 0x202020,
    scale: { x: 20, y: 20, z: 20 },
    scarcity: 0.8,
  },
  ironOre: {
    id: 5,
    name: "ironOre",
    material: new THREE.MeshLambertMaterial({ map: textures.ironOre }),
    color: 0x806060,
    scale: { x: 60, y: 60, z: 60 },
    scarcity: 0.9,
  },
};

export const resources = [blocks.stone, blocks.coalOre, blocks.ironOre];
