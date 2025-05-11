# Glossary

A dictionary of terms to help you become more familiar with NodeSecure.

## Orgs and Initiatives

| name | description | website |
| --- | --- | --- |
| OpenSSF | The Open Source Security Foundation (OpenSSF) is a community of software developers, security engineers, and more who are working together to secure open source software for the greater public good. | [openssf.org](https://openssf.org/) |
| OWASP | The Open Web Application Security Project (OWASP) is a non-profit organization dedicated to improving the security of software through community-led projects, tools, documentation, and awareness. It is a widely respected source of best practices in application security. |
| OWASP Top 10 | A widely recognized industry-standard document summarizing the top 10 most common web application security risks. | [owasp.org/www-project-top-ten](https://owasp.org/www-project-top-ten/) |
| MITRE | MITRE is a non-profit organization that operates federally funded research and development centers (FFRDCs) in the United States. It is also the maintainer of the CVE and CWE systems. |
| OSV | Open Source Vulnerabilities (OSV) is a distributed vulnerability database for open source projects. | [osv.dev](https://osv.dev/) |
| Scorecard | An automated tool that assesses open source projects for security risks using a series of checks. It was created to help improve the health of critical open source projects. | [scorecard.dev](https://scorecard.dev/) |
| SLSA | Supply-chain Levels for Software Artifacts (SLSA, pronounced "salsa") is a security framework and checklist of standards and controls to secure the software supply chain. | [slsa.dev](https://slsa.dev/) |
| NVD | The National Vulnerability Database (NVD) is the U.S. government repository of vulnerability management data. | [nvd.nist.gov](https://nvd.nist.gov/) |
| SPDX | The Software Package Data Exchange (SPDX) is an open standard for communicating the components, licenses, and security references of software, often used in SBOMs. |
| CycloneDX | CycloneDX is an OWASP project that provides a full-stack Bill of Materials (BOM) standard to enhance software supply chain security. |

## Security Jardon

| acronym or word | description |
| --- | --- |
| Vulnerability | A flaw or weakness in a system or application that can be exploited to compromise its security—potentially leading to unauthorized access, data leaks, or service disruption. |
| SCA | Software Composition Analysis. A method for identifying open source components and their associated vulnerabilities in a codebase. |
| SBOM | Software Bill Of Materials. See [Software Bill Of Materials (SBOM) Explained: Why SBOMs are essential for cybersecurity](https://snyk.io/articles/software-bill-of-materials/) |
| CVE | Common Vulnerabilities and Exposures — a standardized identifier assigned to publicly disclosed security vulnerabilities. Think of it like a “ticket ID” for tracking vulnerabilities. |
| CWE | Common Weakness Enumeration — a classification system for common software flaws that can lead to vulnerabilities. Maintained by MITRE. |
| CVSS | Common Vulnerability Scoring System — a numerical scoring system (0 to 10) used to quantify the severity of a vulnerability based on impact and exploitability. Often used alongside CVEs. |
| SAST | Static Application Security Testing: analyzing source code or binaries for vulnerabilities without executing the program. |
| DAST | Dynamic Application Security Testing: analyzing a running application to find vulnerabilities through simulated attacks. |
| Obfuscation | The process of making code difficult to read or understand, often used to prevent reverse engineering or tampering. [Wikipedia](https://en.wikipedia.org/wiki/Obfuscation) |

## NPM

Are you clueless about how package manager functions? Check out this article written by our core collaborator, Antoine COULON.: [📦 Everything you need to know: package managers](https://dev.to/nodesecure/everything-you-need-to-know-package-managers-286c)

| word | description |
| --- | --- |
| registry | 	A public or private (such as [Verdaccio](https://verdaccio.org/)) API storage where packages are published and accessed. It must comply with the [Registry API specification](https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md) .|
| manifest | A manifest refers to a package descriptor similar to package.json. It may include additional metadata or omit non-essential fields depending on the context (e.g., during publishing or resolution). |
| packument | the packument is the top-level metadata document for a package. It contains all available version manifests and associated metadata. |
| tarball | A `.tgz` archive that contains the actual package contents to be installed. It includes the files defined in the manifest |
| specifier |	A string that tells npm how to resolve a dependency. It can take many forms: SemVer ranges, Git URLs, GitHub shortcuts, local file paths, and more. |
| tree | Typically refers to the dependency tree—how packages relate to one another within `node_modules` |

> [!NOTE]
> For a deeper understanding, reading the documentation of [Arborist](https://github.com/npm/cli/tree/latest/workspaces/arborist) and [Pacote](https://github.com/npm/pacote#readme) can help clarify many underlying concepts used by the npm CLI.

## NodeSecure

| word | description |
| --- | --- |
| payload | The resulting JSON object produced by a NodeSecure scan, containing all metadata, metrics, and analysis results. |
| strategy | The strategy (or data source) used to fetch vulnerability information for packages. See the list of [available strategies in Vulnera](https://github.com/NodeSecure/vulnera?tab=readme-ov-file#available-strategy). |
| probe | A mechanism used in NodeSecure to collect information from source code. The word is inspired by the game Starcraft. |
