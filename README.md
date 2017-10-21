# slash-ballers
A slack backslash for NBA ballers

## Install
- clone repo `https://github.com/willchertoff/slash-ballers`
- install dependencies `npm i`
- deploy with cloud service (use [now](https://github.com/zeit/now-cli))
- Add to Slack Slash-Commands under `slack.com/apps`
- Find section called **Integration Settings**
- Add your deployment address of `slash-ballers`
- Select `GET` as the **Method**
- Enter "ballers" for the command in Custamize Name input.

## Use
If the player is not found, the system returns no match, otherwise:

```
/ballers Lillard

# returns
Damian Lillard had 22.5 points,
6 rebounds, and 6 assits.
```
