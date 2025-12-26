enum I18nKey 
{
	home = "home",
	about = "about",
	archive = "archive",
	search = "search",

	tags = "tags",
	categories = "categories",
	recentPosts = "recentPosts",

	comments = "comments",

	untitled = "untitled",
	uncategorized = "uncategorized",
	noTags = "noTags",

	wordCount = "wordCount",
	wordsCount = "wordsCount",
	minuteCount = "minuteCount",
	minutesCount = "minutesCount",
	postCount = "postCount",
	postsCount = "postsCount",

	themeColor = "themeColor",

	lightMode = "lightMode",
	darkMode = "darkMode",
	systemMode = "systemMode",

	more = "more",

	author = "author",
	publishedAt = "publishedAt",
	license = "license",
}

export default I18nKey;




/**



TypeScript


enum I18nKey {
    home = "home",
    about = "about",
    // ... 其他枚举成员
}

export default I18nKey;


enum：TypeScript 关键字，用于定义枚举类型
I18nKey：枚举类型的名称，遵循驼峰命名法（首字母大写）
枚举内部是一系列的键值对



// 导入枚举
import I18nKey from '../i18n/i18nKey';
// 导入翻译函数
import { i18n } from '../i18n/translation';

// 使用方式
const commentsText = i18n(I18nKey.comments); // 获取"评论"的翻译文本



 */