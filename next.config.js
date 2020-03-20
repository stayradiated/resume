module.exports = {
  exportPathMap: async (defaultPathMap, { dev, dir, outDir, distDir, buildId }) => ({
    '/': { page: '/' },
  })
}
