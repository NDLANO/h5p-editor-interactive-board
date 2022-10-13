// @ts-check

import libraryJson from "../library.json";

export const hotspotParams = {
  type: "rectangle",
  showAsHotspot: true,
  title: "",
  shape: {
    borderStyle: "none",
    fillColor: "transparent",
  },
};

/**
 * Parse `library.json` to find version number of given dependency
 *
 * @param {string} libraryName
 * @return {string}
 */
export function getLibraryDependencyVersion(libraryName) {
  const dependency = libraryJson.preloadedDependencies.find(
    (dependency) => dependency.machineName === libraryName
  );

  if (!dependency) {
    return;
  }

  return `${dependency.majorVersion}.${dependency.minorVersion}`;
}

/**
 * @param {string} translationKey 
 * @param {unknown[]} rest
 * @returns {string}
 */
export function t(translationKey, ...rest) {
  // @ts-expect-error H5PEditor is globally available
  return H5PEditor.t('H5PEditor.NDLAInteractiveBoard', translationKey, ...rest);
}